import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'

export const useHookDispatch: () => AppDispatch = useDispatch
export const useHookSelector: TypedUseSelectorHook<RootState> = useSelector