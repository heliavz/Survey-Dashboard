export default function ElementRenderer({ element, onChange }) {
  const type = element.type;

  switch (type) {
    case "Text":
      return (
        <div className="p-3 bg-indigo-50 rounded-md">
          <input
            value={element.content || ""}
            onChange={(e) => onChange({ ...element, content: e.target.value })}
            placeholder="Text content..."
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      );

    case "Link":
      return (
        <div className="p-3 bg-indigo-50 rounded-md">
          <input
            value={element.url || ""}
            onChange={(e) => onChange({ ...element, url: e.target.value })}
            placeholder="https://example.com"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      );

    case "Media":
      return (
        <div className="p-3 bg-indigo-50 rounded-md">
          <p className="text-sm">Media placeholder (image/video)</p>
        </div>
      );

    case "Rating":
      return (
        <div className="p-3 bg-indigo-50 rounded-md">
          <label className="text-sm">Max rating:</label>
          <select
            value={element.max || 5}
            onChange={(e) =>
              onChange({ ...element, max: Number(e.target.value) })
            }
            className="ml-2"
          >
            <option>3</option>
            <option>5</option>
            <option>10</option>
          </select>
        </div>
      );

    case "Diagram":
      return (
        <div className="p-3 bg-indigo-50 rounded-md">
          <p className="text-sm">Diagram placeholder</p>
        </div>
      );

    default:
      return <div>{type}</div>;
  }
}
