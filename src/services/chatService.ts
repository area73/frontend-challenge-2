import Core from '@landbot/core';

export const CHAT_CONFIG_URL =
  'https://chats.landbot.io/u/H-441480-B0Q96FP58V53BJ2J/index.json';

export const fetchChatConfig = async (): Promise<Core> => {
  const response = await fetch(CHAT_CONFIG_URL);
  if (!response.ok) {
    throw new Error(`Error fetching config: ${response.statusText}`);
  }
  const config = await response.json();
  const core = new Core(config);
  await core.init();
  return core;
};
