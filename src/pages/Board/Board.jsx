import "./Board.css";
// Trello Board
import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css"; // Trello Board Css.
import useBoard from "../../store/Board";
import { IoMdAdd } from "react-icons/io"; // for Add icon
import { RxCross2 } from "react-icons/rx"; // for cross icon
import AddCardModal from "../../components/AddCardModal/AddCardModal";
import { useState } from "react";

const BoardPage = () => {
  // from Global state board.js
  const { board, setBoard } = useBoard();

  // handleColumnMove function
  const handleColumnMove = (_card, source, destination) => {
    const updateBoard = moveColumn(board, source, destination);
    setBoard(updateBoard);
  };

  // handleCardMove function
  const handleCardMove = (_card, source, destination) => {
    const updateBoard = moveCard(board, source, destination);
    setBoard(updateBoard);
  };

  const getColumn = (card) => {
    const column = board.columns.filter((column) =>
      column.cards.includes(card)
    );
    return column[0];
  };

  const getGradient = (card) => {
    const column = getColumn(card);
    const title = column.title;
    if (title === "TODO") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65,65,65,0.67) -1.72%, rgba(48,189,220) 163.54%)",
      };
    } else if (title === "Doing") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65,65,65,0.67) -1.72%, rgba(220,48,48) 163.54%)",
      };
    } else if (title === "Completed") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65,65,65,0.67) -1.72%, rgba(48,220,86) 163.54%)",
      };
    } else if (title === "Backlog") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65,65,65,0.67) -1.72%, rgba(134,48,220) 163.54%)",
      };
    }
  };

  return (
    <div className="board-container">
      <span>Trello Board</span>
      <Board
        allowAddColumn
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
        renderCard={(props) => (
          <div className="kanban-card" style={getGradient(props)}>
            <div>
              <span>{props.title}</span>
              <button
                className="remove-button"
                type="button"
                onClick={() => {
                  const updateBoard = removeCard(
                    board,
                    getColumn(props),
                    props
                  );
                  setBoard(updateBoard);
                }}
              >
                <RxCross2 color="white" size={15} />
              </button>
            </div>
            <span>{props.description}</span>
          </div>
        )}
        renderColumnHeader={(props) => {
          const [modalOpened, setmodalOpened] = useState(false);
          return (
            <div className="column-header">
              <span>{props.title}</span>

              <IoMdAdd color="white" size={25} title="Add Card" onClick={() => setmodalOpened(true)} />
              <AddCardModal
                visible={modalOpened}
                onClose={() => setmodalOpened(false)}
              />
            </div>
          );
        }}
      >
        {board}
      </Board>
    </div>
  );
};

export default BoardPage;
