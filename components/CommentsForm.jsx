import React, {useState, useEffect, useRef} from 'react'

function CommentsForm({slug}) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setsSowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);
    
    const{ comment } = commentEl.current;
    const{ name } = commentEl.current;
    const{ email } = commentEl.current;

    if(!commentEl.current.value || !nameEl.current.value || !emailEl.current.value)
  }

  return (
    <div className='rounded-lg p-8 pb-12 mb-8 bg-white shadow-lg'>
      <h1 className='text-xl mb-8 font-semibold border-b pb-4'>Comments Form</h1>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
        ref={commentEl}
        className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
        placeholder="Comment"
        name="comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 ">
        <input
          type="text" ref={nameEl}
          className="py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder='Name'
          name="name"
          />
      <input
          type="text" ref={nameEl}
          className="py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder='Email'
          name="email"
          />
      </div>
     {error && <p className='text-xs text-red-500'>Fill all fields!</p>}
     <div className="mt-8">
      <button
        type="button"
        onClick={handleCommentSubmission}
        className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursorl-pointer"
        >
      Post Comment
      </button>
      {showSuccessMessage && <span>Comment submitted for review</span>}
     </div>
     
    </div>
  )
}

export default CommentsForm
