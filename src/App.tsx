import { useState, useEffect } from 'react';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import HashtagList from './components/HashtagList';
import { TFeedbackItem } from './lib/types';

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddToList = async (text: string) => {
    const companyName = text
      .split(' ')
      .find((word) => word.includes('#'))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks',
      {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
  };

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

  return (
    <div className="app">
      <Footer />
      <Container
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />
      <HashtagList />
    </div>
  );
}

export default App;
