'use client';

import { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableItem } from './sortable-item';
import { toast } from 'sonner';

interface Department {
  id: string;
  name: string;
  order: number;
}

interface DraggableListProps {
  departments: Department[];
  onUpdateOrder: (departments: Department[]) => void;
  onEdit: (department: Department) => void;
  onDelete: (departmentId: string) => void;
}

export function DraggableList({
  departments,
  onUpdateOrder,
  onEdit,
  onDelete,
}: DraggableListProps) {
  const [items, setItems] = useState(departments);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      
      const newItems = arrayMove(items, oldIndex, newIndex);
      setItems(newItems);
      
      // 表示順を更新
      const updatedDepartments = newItems.map((item, index) => ({
        ...item,
        order: index + 1,
      }));
      
      onUpdateOrder(updatedDepartments);
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div className="space-y-2">
          {items.map((department) => (
            <SortableItem
              key={department.id}
              id={department.id}
              department={department}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
} 