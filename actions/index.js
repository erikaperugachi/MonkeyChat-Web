export const ADD_USER_SESSION = 'ADD_USER_SESSION'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const ADD_CONVERSATION = 'ADD_CONVERSATION'
export const ADD_CONVERSATIONS = 'ADD_CONVERSATIONS'
export const UPDATE_CONVERSATION_STATUS = 'UPDATE_CONVERSATION_STATUS'

export const addUserSession = (user) => {
	return {
		type: ADD_USER_SESSION,
		user: user
	}
}

export const addConversations = (conversations) => {
	return {
		type: ADD_CONVERSATIONS,
		conversations: conversations
	}
}

export const addConversation = (conversation) => {
	return {
		type: ADD_CONVERSATION,
		conversation: conversation
	}
}

export const updateConversationStatus = (conversation) => {
	return {
		type: UPDATE_CONVERSATION_STATUS,
		conversation: conversation
	}
}

export const addMessage = (message, conversationId) => {
	return {
		type: ADD_MESSAGE,
		message: message,
		conversationId: conversationId
	}
}