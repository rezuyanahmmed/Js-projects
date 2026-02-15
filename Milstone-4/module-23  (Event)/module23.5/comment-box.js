document.getElementById('btn-post-comment').addEventListener('click', function () {
  const commentTextBox = document.getElementById('comment-text-box');
  const newComment = commentTextBox.value;
  
  const CommentContainer = document.getElementById('comment-container')

  const commentElement = document.createElement('p')
  commentElement.classList.add('comment')
  commentElement.innerText = newComment;

  CommentContainer.appendChild(commentElement);

})