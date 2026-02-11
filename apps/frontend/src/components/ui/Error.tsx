interface ErrorProps {
  message?: string;
  retry?: () => void;
}

export function Error({ message = "Ein Fehler ist aufgetreten", retry }: ErrorProps) {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="text-center">
        <div className="text-red-500 text-4xl mb-4">⚠️</div>
        <p className="text-gray-600 mb-4">{message}</p>
        {retry && (
          <button
            onClick={retry}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Erneut versuchen
          </button>
        )}
      </div>
    </div>
  );
}
