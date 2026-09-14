import { RESUME_CONFIG } from '@/constants/config/resume.constants';

export const dynamic = 'force-dynamic';

const createFallbackResponse = (request: Request) =>
  Response.redirect(new URL(RESUME_CONFIG.fallbackAsset, request.url), 307);

export const GET = async (request: Request) => {
  const blobUrl = process.env.RESUME_BLOB_URL?.trim();

  if (!blobUrl) {
    return createFallbackResponse(request);
  }

  try {
    const upstream = await fetch(blobUrl, { cache: 'no-store' });

    if (!upstream.ok || !upstream.body) {
      return createFallbackResponse(request);
    }

    const headers = new Headers({
      'Cache-Control': 'private, no-store, max-age=0',
      'Content-Disposition': `attachment; filename="${RESUME_CONFIG.downloadFilename}"`,
      'Content-Type': upstream.headers.get('content-type') ?? 'application/pdf',
    });

    const contentLength = upstream.headers.get('content-length');
    if (contentLength) {
      headers.set('Content-Length', contentLength);
    }

    return new Response(upstream.body, {
      status: 200,
      headers,
    });
  } catch {
    return createFallbackResponse(request);
  }
};
