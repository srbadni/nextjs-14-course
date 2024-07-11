"use client"

import React from 'react';

const ErrorBoundary = ({error, reset}: {error: Error, reset: () => void}) => {
    return (
        <div>
            {error.message}
            <button onClick={() => reset()}>تلاش مجدد</button>
        </div>
    );
};

export default ErrorBoundary;