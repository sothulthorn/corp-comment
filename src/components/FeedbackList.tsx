import { TriangleUpIcon } from '@radix-ui/react-icons';

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>

        <div>
          <p>C</p>
        </div>

        <div>
          <p>Code Square</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            quibusdam, sunt suscipit dignissimos voluptatibus voluptas.
          </p>
        </div>

        <p>4d</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
