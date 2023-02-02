export default function Template({ children }: {
    children: React.ReactNode
  }) {
    return <div>
        <div className="text-center flex justify-center">
          
          Products You might be intrested in
        </div>

        {children}
        </div>;
  }