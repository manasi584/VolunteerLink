import React from 'react'

const CurrTasks = () => {
  return (
    <div class="container">
    <h2>Current Jobs</h2>
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Deadline <span class="info-icon">i</span></th>
          <th>Status</th>
          <th>Mode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Graphic Design</td>
          <td>12/3/25</td>
          <td><span class="status done">Done</span></td>
          <td>Virtual</td>
        </tr>
        <tr>
          <td>Logo Design</td>
          <td>10/5/25</td>
          <td><span class="status pending">Pending</span></td>
          <td>Remote</td>
        </tr>
        <tr>
          <td>Graphic Designing</td>
          <td>15/2/25</td>
          <td><span class="status pending">Pending</span></td>
          <td>Virtual</td>
        </tr>
       
      </tbody>
    </table>
  </div>
  )
}

export default CurrTasks