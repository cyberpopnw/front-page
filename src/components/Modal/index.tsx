import { createVNode, render } from 'vue'
import Modal from '@/components/Modal/Modal.vue'
import type { ModalProps } from '@/components/Modal/index.type'


export const modal = (props: ModalProps) => {
  const container = document.createElement('div')
  container.setAttribute(
    'style',
    'z-index: 9999; ' +
    'width: 100vw; ' +
    'height: 100vh; ' +
    'display: flex; ' +
    'justify-content: center; ' +
    'align-items: center;' +
    'position: absolute;' +
    'top: 0;' +
    'left: 0;'
  )

  const destroyElement = () => {
    render(null, container)
    document.body.removeChild(container)
  }

  const vm = createVNode(Modal, {
    destroyElement,
    ...props
  })

  render(vm, container)
  document.body.appendChild(container)

  return {
    element: container,
    close: destroyElement
  }
}

export default Modal
