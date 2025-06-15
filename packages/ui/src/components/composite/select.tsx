'use client';

import { Dialog, DialogContent, DialogHeader } from '@repo/ui/components/ui/dialog';
import { cn } from '@repo/ui/lib/utils';
import { Plus, Search } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface SelectPProps<T> {
  data: T[];
  value: string | undefined;
  onChange: (value: string) => void;
  getOptionLabel: (item: T) => string;
  getOptionValue: (item: T) => string;
  placeholder?: string;
  width?: string;
  height?: string;
  addButtonLabel?: string;
  renderModal?: (close: () => void) => React.ReactNode;
  className?: string;
  contentClassName?: string;
  disableFilter?: boolean;
}

export const Select = <T,>({
  data,
  value,
  onChange,
  getOptionLabel,
  getOptionValue,
  placeholder = 'Select item...',
  width = '100%',
  height = '350px',
  addButtonLabel = '',
  renderModal,
  className,
  contentClassName,
  disableFilter = false
}: SelectPProps<T>): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredData = data.filter((item) => getOptionLabel(item).toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="relative" ref={containerRef}>
      <div
        className={cn(
          'data-[placeholder]:text-muted-foreground flex h-8 items-center rounded-md border bg-white px-3 py-1 hover:border-blue-500 dark:bg-neutral-900',
          isFocused || isOpen ? 'border-blue-500' : 'border-input',
          'cursor-text',
          className
        )}
        tabIndex={0}
        onClick={() => setIsOpen((prev) => !prev)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        data-testid="select-trigger"
      >
        <span className={cn('flex-1 truncate text-gray-900', !value && 'text-gray-400')}>
          {value ? getOptionLabel(data.find((item) => getOptionValue(item) === value) as T) : placeholder}
        </span>
        {isOpen && addButtonLabel ? (
          <Search className="ml-2 size-3 text-gray-400" />
        ) : (
          <svg
            className="ml-2 size-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div>
      {isOpen && (
        <div
          className="border-input absolute z-50 mt-1 w-full rounded-md border bg-white shadow-lg dark:bg-neutral-900"
          style={{ maxHeight: height, minWidth: width, overflowY: 'auto' }}
        >
          {!disableFilter && (
            <div className="sticky top-0 z-10 bg-white px-2 py-2 dark:bg-neutral-900">
              <div className="border-input flex items-center rounded-md border px-2">
                <Search className="size-3 text-gray-400" />
                <input
                  ref={inputRef}
                  className="border-input ml-2 h-7 flex-1 bg-white p-1 focus:outline-none dark:bg-neutral-900"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  data-testid="select-search"
                />
              </div>
            </div>
          )}
          <ul className="max-h-56 overflow-y-auto py-1">
            {filteredData.length === 0 && (
              <li className={cn('mx-1 rounded-sm px-4 py-2 text-gray-400', contentClassName)}>No results</li>
            )}
            {filteredData.map((item) => (
              <li
                key={getOptionValue(item)}
                className={cn(
                  'mx-1 cursor-pointer rounded-sm px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                  value === getOptionValue(item) && 'bg-blue-100 font-medium text-blue-700',
                  contentClassName
                )}
                onClick={() => {
                  onChange(getOptionValue(item));
                  setIsOpen(false);
                  setSearch('');
                }}
                data-testid="select-option"
              >
                {getOptionLabel(item)}
              </li>
            ))}
          </ul>
          {addButtonLabel && (
            <div className="h-10 border-t px-4 py-2">
              <button
                type="button"
                className="flex w-full cursor-pointer items-center gap-2 text-neutral-400 hover:text-blue-700"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                data-testid="select-add-btn"
              >
                <Plus className="size-4" /> {addButtonLabel}
              </button>
            </div>
          )}
        </div>
      )}
      {renderModal && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>{/* <DialogTitle>Add {addButtonLabel}</DialogTitle> */}</DialogHeader>
            {renderModal(() => setIsModalOpen(false))}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
