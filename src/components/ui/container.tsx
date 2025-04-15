import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
     className?: string;
     children: React.ReactNode
}

export const Container: React.FC<Props> = (props) => {
     const {className, children} = props;
     return (
        <div className={cn("max-w-[1250px] mx-auto px-4", className)}>
            {children}
        </div>
    );
}