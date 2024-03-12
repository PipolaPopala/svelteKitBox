import { writable } from "svelte/store"

export const modalStore = (modalState: boolean) => {
  const { set, subscribe, update } = writable(modalState)
  function setTrue() {
    set(true)
  }
  function setFalse() {
    set(false)
  }
  function toggleModal() {
    update((modalState) => modalState = !modalState)
  }
  return { setTrue, setFalse, toggleModal, subscribe }
}

export const renameModalStore = modalStore(false);