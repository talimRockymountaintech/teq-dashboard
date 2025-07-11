export default function Breadcrumb({ items }) {
  return (
    <div className="text-sm text-primary px-4 py-4 border-b">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-1">/</span>}
            {item.href ? (
              <a
                href={item.href}
                className="hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <span className="font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}