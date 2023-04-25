import React from 'react'

const ProblemDescription = (props) => {
    const { id, title, statement, examples } = props;
    // const [solutionLanguage, setSolutionLanguage] = useState("cpp");
    return (
        <div className="text-gray-800">
            <div className="mx-auto px-6 py-4">
                <div className="grid grid-cols-2 gap-6 items-start">
                    <div className="grid grid-cols-1">
                        <h1 className="text-xl font-bold">
                            {id}. {title}
                        </h1>
                        <div className="mt-4 text-base font-normal">{statement}</div>
                        {examples.map((example, idx) => (
                            <div>
                                <div className="px-1 mt-6 mb-1 font-medium">
                                    Example {idx + 1}:
                                </div>
                                <div className="border-gray-500 bg-slate-100 rounded-2xl px-3 py-2">
                                    <div>
                                        <div className="font-bold">Input :</div>
                                        <div className="font-mono">{example.Input}</div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Output :</div>
                                        <div className="font-mono">{example.Output}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ProblemDescription