const actionAddComment = (eventId, values, parentId, replyToId) =>
    async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase()
        const profile = getState().firebase.profile
        const user = firebase.auth().currentUser
        let newComment = {
            parentId: parentId,
            displayName: profile.displayName,
            photoURL: profile.photoURL || '/assets/user.png',
            uid: user.uid,
            text: values.comment,
            date: Date.now(),
            replyTo: replyToId || 0,
        }
        try {
            await firebase.push(`chat/${eventId}`, newComment)
        } catch(e) {
            console.log('e', e)
            toastr.error('oops', 'something wrong')
        }
    }

export {
    actionAddComment,
}