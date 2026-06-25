import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex flex-col items-center justify-center min-h-[200px] p-8 text-center">
            <p className="text-gray-400">Something went wrong loading this section.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="mt-4 text-gold underline text-sm"
            >
              Try again
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
