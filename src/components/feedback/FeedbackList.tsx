import { useFeedbackItemStore } from '../../stores/feedbackItemsStore';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const isLoading = useFeedbackItemStore((state) => state.isLoading);
  const errorMessage = useFeedbackItemStore((state) => state.errorMessage);
  const filterFeedbackItems = useFeedbackItemStore((state) =>
    state.getFilteredFeedbackItems()
  );

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {filterFeedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
