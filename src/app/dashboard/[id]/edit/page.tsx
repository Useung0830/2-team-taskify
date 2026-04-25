interface ColumnEditProps {
  onClose: () => void;
  onDelete: () => void;
}

export default function ColumnEdit({ onClose, onDelete }: ColumnEditProps) {
  const handleClose = () => {
    onClose();
  };

  const handleDeleteButton = () => {
    onDelete();
  };

  return (
    <div className="bg-black-900 fixed inset-0 z-100 flex w-full items-center justify-center backdrop-blur-sm">
      <div className="text-2xl font-bold text-white">
        컬럼 관리
        <div className="x-full mt-2 flex w-md flex-col gap-3 rounded-lg text-lg text-white">
          <button className="cursor-pointer bg-blue-900 text-white hover:bg-blue-700 active:bg-blue-700 disabled:bg-blue-950">
            수정하기
          </button>

          <button
            onClick={handleDeleteButton}
            className="cursor-pointer bg-gray-900 text-gray-300 hover:bg-gray-700 active:bg-gray-700 disabled:bg-red-950"
          >
            삭제하기
          </button>

          <button
            onClick={handleClose}
            className="text-md mt-5 cursor-pointer text-rose-900 underline"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
