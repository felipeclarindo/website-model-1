window.watsonAssistantChatOptions = {
integrationID: "3d366135-de88-4fc5-bbbf-0beae16b13e8", // The ID of this integration.
region: "us-south", // The region your integration is hosted in.
serviceInstanceID: "f4a0de89-cd77-4e06-9d53-8f46fa553ea6", // The ID of your service instance.
onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
const t=document.createElement('script');
t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
document.head.appendChild(t);
});