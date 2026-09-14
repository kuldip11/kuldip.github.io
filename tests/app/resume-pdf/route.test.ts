import { afterEach, describe, expect, it, vi } from 'vitest';

import { GET } from '@/app/resume.pdf/route';
import { RESUME_CONFIG } from '@/constants/config/resume.constants';

const originalResumeBlobUrl = process.env.RESUME_BLOB_URL;

afterEach(() => {
  vi.unstubAllGlobals();

  if (originalResumeBlobUrl === undefined) {
    delete process.env.RESUME_BLOB_URL;
  } else {
    process.env.RESUME_BLOB_URL = originalResumeBlobUrl;
  }
});

describe('resume PDF route', () => {
  it('falls back to the bundled résumé when Blob is not configured', async () => {
    delete process.env.RESUME_BLOB_URL;

    const response = await GET(new Request('https://portfolio.example/resume.pdf'));

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toBe(`https://portfolio.example${RESUME_CONFIG.fallbackAsset}`);
  });

  it('streams the configured Blob résumé through the stable public route', async () => {
    process.env.RESUME_BLOB_URL = 'https://portfolio.public.blob.vercel-storage.com/resume/Kuldip_Kumar_Sah.pdf';

    const fetchMock = vi.fn().mockResolvedValue(
      new Response('pdf-data', {
        headers: {
          'content-length': '8',
          'content-type': 'application/pdf',
        },
      }),
    );
    vi.stubGlobal('fetch', fetchMock);

    const response = await GET(new Request('https://portfolio.example/resume.pdf'));

    expect(fetchMock).toHaveBeenCalledWith(process.env.RESUME_BLOB_URL, { cache: 'no-store' });
    expect(response.status).toBe(200);
    expect(response.headers.get('content-type')).toBe('application/pdf');
    expect(response.headers.get('content-disposition')).toContain(RESUME_CONFIG.downloadFilename);
    expect(response.headers.get('cache-control')).toBe('private, no-store, max-age=0');
    expect(await response.text()).toBe('pdf-data');
  });

  it('falls back to the bundled résumé when Blob cannot be read', async () => {
    process.env.RESUME_BLOB_URL = 'https://portfolio.public.blob.vercel-storage.com/resume/Kuldip_Kumar_Sah.pdf';
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(null, { status: 503 })));

    const response = await GET(new Request('https://portfolio.example/resume.pdf'));

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toBe(`https://portfolio.example${RESUME_CONFIG.fallbackAsset}`);
  });
});
