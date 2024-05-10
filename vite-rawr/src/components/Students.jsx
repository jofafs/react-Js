import React, { Component } from 'react';

class Students extends Component {
  state = {
    searchTerm: '',
    students: [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      // Add more student data as needed
    ],
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { searchTerm, students } = this.state;
    const filteredStudents = students.filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <main className="flex-1 p-8 bg-black text-white">
        <div className="bg-violet-900 rounded-lg shadow-xl p-4 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Students</h2>
          
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search students..."
            className="bg-grey-500 text-white px-4 py-2 rounded-lg mb-4"
            value={searchTerm}
            onChange={this.handleSearchChange}
          />

          {/* Table */}
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 border-b-2 border-gray-600 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-600">{student.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-600">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap border-b border-gray-600">{student.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default Students;
