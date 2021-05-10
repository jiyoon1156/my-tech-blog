import React, { useState } from 'react';
import { data } from './data.json'

const Tables: React.FC = () => {

	const [info, setInfo] = useState(0);
	const [revData, setRevData] = useState(data);
	const onClick = () => {
		setRevData(revData.reverse());
		setInfo(info + 1);
	};
	return (
		<>
		<div className="hidden">{info}</div>
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-m font-medium text-gray-500 uppercase tracking-wider"
										>
											<button onClick={() => onClick()} className="focus:outline-none">🔽</button>
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Title
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Summary
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Tags
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Date
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{revData.map((idx) => (
										<tr key={idx.id}>
											<td className="px-7 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{idx.id}</div>
											</td>
											<td className="px-2 py-4">
												<div className="flex items-center">
													<div className="ml-4">
														<div className="text-sm font-light text-blue-500">
															<a href={idx.url} className="hover:text-gray-900">
																{idx.title}
															</a>
														</div>
													</div>
												</div>
											</td>
											<td className="px-6 py-4">
												<div className="text-sm text-gray-900">{idx.summary}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
													{idx.tags}
												</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{idx.date}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
  )
}

export default Tables;
