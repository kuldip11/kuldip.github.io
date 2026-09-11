type BadgeVariant = 'featured' | 'category' | 'tag';

const badgeClasses: Record<BadgeVariant, string> = {
  featured: 'rounded-full border border-[#42dca2] px-2.5 py-1 text-[10px] text-[#58eeb1]',
  category: 'rounded-full border border-[#245b45] px-2.5 py-1 text-[10px] text-[#a9bbb3]',
  tag: 'rounded-full border border-[#27775a] px-2.5 py-1 text-[10px] text-[#cce0d7]',
};

export const Badge = ({ children, variant }: { children: React.ReactNode; variant: BadgeVariant }) => (
  <span className={badgeClasses[variant]}>{children}</span>
);
