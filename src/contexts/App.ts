import { createContext } from 'react'

interface KeyState {
  key: string
  setKey: React.Dispatch<string>
}

const KeyContext: React.Context<KeyState> = createContext({ key: "", setKey: (value: string) => { }})

export default KeyContext;
