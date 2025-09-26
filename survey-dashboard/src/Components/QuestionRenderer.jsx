export default function QuestionRenderer({ question, onChange }) {
  switch (question.type) {
    case "Short Answer":
      return (
        <div className="p-3 bg-purple-600 text-white rounded-md">
          <input
            type="text"
            placeholder="Short answer"
            value={question.label}
            onChange={(e) => onChange({ ...question, label: e.target.value })}
            className="w-full bg-transparent border-b border-white placeholder-gray-200 focus:outline-none"
          />
        </div>
      );

    case "Long Answer":
      return (
        <div className="p-3 bg-purple-600 text-white rounded-md">
          <textarea
            placeholder="Long answer"
            value={question.label}
            onChange={(e) => onChange({ ...question, label: e.target.value })}
            className="w-full bg-transparent border-b border-white placeholder-gray-200 focus:outline-none"
          />
        </div>
      );

    case "Single Choice":
      return (
        <div className="p-3 bg-purple-600 text-white rounded-md">
          <input
            type="text"
            placeholder="Question text..."
            value={question.label}
            onChange={(e) => onChange({ ...question, label: e.target.value })}
            className="w-full bg-transparent border-b border-white placeholder-gray-200 mb-2 focus:outline-none"
          />
          {question.options.map((opt, i) => (
            <div key={i} className="flex items-center gap-2">
              <input type="radio" disabled />
              <input
                type="text"
                value={opt}
                placeholder={`Option ${i + 1}`}
                onChange={(e) => {
                  const newOpts = [...question.options];
                  newOpts[i] = e.target.value;
                  onChange({ ...question, options: newOpts });
                }}
                className="bg-transparent border-b border-white placeholder-gray-200 flex-1 focus:outline-none"
              />
            </div>
          ))}
          <button
            className="text-sm mt-2 underline"
            onClick={() =>
              onChange({ ...question, options: [...question.options, ""] })
            }
          >
            + Add Option
          </button>
        </div>
      );

    case "Multiple Choice":
      return (
        <div className="p-3 bg-purple-600 text-white rounded-md">
          <input
            type="text"
            placeholder="Question text..."
            value={question.label}
            onChange={(e) => onChange({ ...question, label: e.target.value })}
            className="w-full bg-transparent border-b border-white placeholder-gray-200 mb-2 focus:outline-none"
          />
          {question.options.map((opt, i) => (
            <div key={i} className="flex items-center gap-2">
              <input type="checkbox" disabled />
              <input
                type="text"
                value={opt}
                placeholder={`Option ${i + 1}`}
                onChange={(e) => {
                  const newOpts = [...question.options];
                  newOpts[i] = e.target.value;
                  onChange({ ...question, options: newOpts });
                }}
                className="bg-transparent border-b border-white placeholder-gray-200 flex-1 focus:outline-none"
              />
            </div>
          ))}
          <button
            className="text-sm mt-2 underline"
            onClick={() =>
              onChange({ ...question, options: [...question.options, ""] })
            }
          >
            + Add Option
          </button>
        </div>
      );

    case "Upload":
      return (
        <div className="p-3 bg-purple-600 text-white rounded-md">
          <input
            type="text"
            placeholder="Upload question"
            value={question.label}
            onChange={(e) => onChange({ ...question, label: e.target.value })}
            className="w-full bg-transparent border-b border-white placeholder-gray-200 focus:outline-none"
          />
          <p className="text-sm mt-1">[File upload field will appear here]</p>
        </div>
      );

    default:
      return null;
  }
}
