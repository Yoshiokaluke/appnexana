export default function UserProfileLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-48 bg-gray-200 rounded"></div>
      
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div>
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div>
              <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
              <div className="h-5 w-40 bg-gray-200 rounded"></div>
            </div>
            <div>
              <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
              <div className="h-5 w-48 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="h-6 w-32 bg-gray-200 rounded"></div>
          <div className="mt-2">
            <div className="h-4 w-28 bg-gray-200 rounded mb-2"></div>
            <div className="h-5 w-36 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
} 