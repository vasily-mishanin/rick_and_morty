import React, { ErrorInfo } from 'react';

type PropsType = {
  errorText: string;
} & React.PropsWithChildren;

type StateType = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='w-full h-full bg-slate-300 flex items-center justify-center'>
          <h1 className='text-center text-xl'>{this.props.errorText}</h1>
        </div>
      );
    }

    return this.props.children;
  }
}
