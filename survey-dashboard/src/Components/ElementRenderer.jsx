export default function ElementRenderer({ element }) {
  switch (element.type) {
    case "Text":
      return (
        <div className="p-3 bg-indigo-200 text-slate-900 rounded-md">
          <p>Text element placeholder</p>
        </div>
      );

    case "Link":
      return (
        <div className="p-3 bg-indigo-200 text-slate-900 rounded-md">
          <a href="#">Link element placeholder</a>
        </div>
      );

    case "Media":
      return (
        <div className="p-3 bg-indigo-200 text-slate-900 rounded-md">
          <p>[Image / Video upload here]</p>
        </div>
      );

    case "Rating":
      return (
        <div className="p-3 bg-indigo-200 text-slate-900 rounded-md">
          ⭐⭐⭐⭐⭐
        </div>
      );

    case "Diagram":
      return (
        <div className="p-3 bg-indigo-200 text-slate-900 rounded-md">
          <p>[Diagram placeholder]</p>
        </div>
      );

    default:
      return null;
  }
}
