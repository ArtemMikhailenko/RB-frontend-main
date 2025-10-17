const FeedbackMessage = ({ error, success }) => (
  <>
    {error && (
      <div className="text-red-500 mb-4 text-center font-medium">
        {error}
      </div>
    )}
    {success && (
      <div className="text-green-600 mb-4 text-center font-medium">
        {success}
      </div>
    )}
  </>
);

export default FeedbackMessage;
