import { useContext, useEffect, useState } from 'react';
import { FeedbackItemsContext } from '../contexts/FeedbackItemsContextProvider';
import { TFeedbackItem } from './types';

export const useFeedbackItemsContext = () => {
  const context = useContext(FeedbackItemsContext);

  if (!context) {
    throw new Error(
      'FeedbackItemsContext is not defined in FeedbackList component'
    );
  }
  return context;
};

export const useFeedbackItems = () => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchFeedbackItem = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage('Something went wrong. Please try again later.');
      }
      setIsLoading(false);
    };

    fetchFeedbackItem();
  }, []);

  return {
    feedbackItems,
    isLoading,
    errorMessage,
    setFeedbackItems,
  };
};
