import { TFeedbackItem } from '../lib/types';
import FeedbackList from './FeedbackList';
import Header from './Header';

type ContainerProps = {
  isLoading: boolean;
  errorMessage: string;
  feedbackItems: TFeedbackItem[];
  handleAddToList: (text: string) => void;
};

const Container = ({
  feedbackItems,
  isLoading,
  errorMessage,
  handleAddToList,
}: ContainerProps) => {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
};

export default Container;
