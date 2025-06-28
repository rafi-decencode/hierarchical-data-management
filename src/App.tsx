import { BarChart3 } from "lucide-react";
import HierarchicalTable from "./components/HierarchicalTable";
import { sampleData } from "./data/sampleData";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mb-6 shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hierarchical Data Management
          </h1>
        </div>

        <HierarchicalTable initialData={sampleData.rows} />

        {/* Enhanced Instructions Card */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h3 className="text-2xl font-bold text-white mb-2">Usage Guide</h3>
            <p className="text-blue-100">
              Master the allocation controls with these comprehensive
              instructions
            </p>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center">
                      %
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Allocation % Button
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Enter a percentage value to increase the current row's
                      value by that percentage. For example, entering "10"
                      increases the value by 10%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded text-white text-xs font-bold flex items-center justify-center">
                      #
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Allocation Val Button
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Enter a numeric value to set the row's value directly to
                      that number. This replaces the current value entirely.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-purple-600 rounded text-white text-xs font-bold flex items-center justify-center">
                      ↕
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Smart Parent Updates
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      When updating a parent row's value, it automatically
                      distributes the new value proportionally among its
                      children based on their current contributions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-amber-600 rounded text-white text-xs font-bold flex items-center justify-center">
                      Δ
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Variance Tracking
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      The variance percentage shows how much each value has
                      changed from its original value. Green indicates an
                      increase, red indicates a decrease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
