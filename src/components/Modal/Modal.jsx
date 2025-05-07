import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/16/solid';


// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, title, children }) => {
    return (
        <Dialog
            open={isOpen}
            as="div"
            className="relative z-50 focus:outline-none"
            onClose={onClose}
        >
            <div className="fixed inset-0 z-10 w-screen o bg-black/70">
                <div className="flex min-h-full items-center justify-center ">
                    <DialogPanel
                        transition
                        className="w-full md:w-auto h-auto md:h-[90vh] max-h-[90vh] overflow-y-scroll flex flex-col rounded-xl dark-text dark:bg-sky-950 bg-gray-300 p-4 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-10 top-10 z-50"
                        >
                            <XMarkIcon className="size-5" />
                        </button>
                        {title && (
                            <DialogTitle
                                as="h3"
                                className="text-2xl ml-8 mt-8 uppercase font-medium dark-text "
                            >
                                {title}
                            </DialogTitle>
                        )}
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default (Modal);