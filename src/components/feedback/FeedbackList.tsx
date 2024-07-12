import { TFeedbackItem } from '../../lib/types';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import FeedbackItem from './FeedbackItem';

type FeedbackListProps = {
  isLoading: boolean;
  errorMessage: string;
  feedbackItems: TFeedbackItem[];
};

const FeedbackList = ({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) => {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
