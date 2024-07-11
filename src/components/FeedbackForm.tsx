import { useState } from 'react';
import { MAX_CHARACTERS } from '../lib/constants';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(event.target.value);
  };

  return (
    <form className="form">
      <textarea
        value={text}
        id="feedback-textarea"
        placeholder="placeholder"
        spellCheck={false}
        onChange={handleChange}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
