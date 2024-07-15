const Notification = ({ hasFeedback }) => {
  return <>{!hasFeedback && <p>No feedback yet</p>}</>;
};

export default Notification;
