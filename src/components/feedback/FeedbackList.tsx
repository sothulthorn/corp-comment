import { useFeedbackItemsContext } from '../../lib/hooks';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const { isLoading, errorMessage, filterFeedbackItems } =
    useFeedbackItemsContext();

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
