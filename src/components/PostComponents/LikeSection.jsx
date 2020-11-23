import React, { useContext } from 'react'
import ProfileContext from '../../contexts/ProfileContext';
import { AiFillFire, AiOutlineFire } from 'react-icons/ai';

function LikeSection({ postId, like, UnlikePost, LikePost }) {
  const profileinfo = useContext(ProfileContext);

  if (!postId) return null
  return (
    <div className="Likesection">
      <button
        className='Like_Post_Button'
        disabled={!profileinfo}
        type='submit'
      >
        {
          like ? (
            <AiFillFire onClick={UnlikePost} color="orange" size="30px" />
          ) : (
              <AiOutlineFire onClick={LikePost} className="Like_logo" size="30px" />
            )
        }
      </button>
    </div>
  )
}

export default LikeSection
