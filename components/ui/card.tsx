import * as React from "react"

import { cn } from "@/lib/utils"

// Add new interface for card props to support dropdown functionality
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  isExpandable?: boolean;
  defaultExpanded?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, isExpandable, defaultExpanded = false, children, ...props }, ref) => {
    const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200",
          isExpandable && "cursor-pointer hover:shadow-md",
          className
        )}
        onClick={isExpandable ? () => setIsExpanded(!isExpanded) : undefined}
        {...props}
      >
        {isExpandable ? (
          <div className={cn(
            "overflow-hidden",
            isExpanded ? "max-h-[1000px]" : "max-h-[300px]"
          )}>
            {children}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent" />
            )}
          </div>
        ) : (
          children
        )}
      </div>
    )
  }
)
Card.displayName = "Card"

// Enhance CardHeader to include optional action buttons
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  actions?: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, actions, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">{children}</div>
        {actions && <div className="ml-4 flex items-center space-x-2">{actions}</div>}
      </div>
    </div>
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  // Also export the new types
  type CardProps,
  type CardHeaderProps,
}

