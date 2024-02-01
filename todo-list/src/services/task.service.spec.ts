import * as taskService from "./task.service";
import * as localstorageService from "./localstorage.service";
  describe('Task service test', () => {
    test('Complete Subtask method should change the subtask id 2 from the task id 1 to completed equal true', () => {
      const tasks = [
        {
          id: 1,
          title: 'Task 1',
          subtasks: [
            { id: 1, title: 'Subtask 1.1', completed: true },
            { id: 2, title: 'Subtask 1.2', completed: false },
            { id: 3, title: 'Subtask 1.3', completed: false },
          ],
        },
        {
          id: 2,
          title: 'Task 2',
          subtasks: [
            { id: 4, title: 'Subtask 2.1', completed: false },
            { id: 5, title: 'Subtask 2.2', completed: false },
          ],
        },
        {
          id: 3,
          title: 'Task 3',
          subtasks: [
            { id: 6, title: 'Subtask 3.1', completed: true },
            { id: 7, title: 'Subtask 3.2', completed: true },
            { id: 8, title: 'Subtask 3.3', completed: false },
          ],
        },
      ];
      const expectedReturnData = [
        {
          id: 1,
          title: 'Task 1',
          subtasks: [
            { id: 1, title: 'Subtask 1.1', completed: true },
            { id: 2, title: 'Subtask 1.2', completed: true },
            { id: 3, title: 'Subtask 1.3', completed: false },
          ],
        },
        {
          id: 2,
          title: 'Task 2',
          subtasks: [
            { id: 4, title: 'Subtask 2.1', completed: false },
            { id: 5, title: 'Subtask 2.2', completed: false },
          ],
        },
        {
          id: 3,
          title: 'Task 3',
          subtasks: [
            { id: 6, title: 'Subtask 3.1', completed: true },
            { id: 7, title: 'Subtask 3.2', completed: true },
            { id: 8, title: 'Subtask 3.3', completed: false },
          ],
        },
      ];
      const spy = jest.spyOn(localstorageService, 'loadAllData');
      spy.mockReturnValue(tasks);
      expect(taskService.completeSubtask(1,2)).toEqual(expectedReturnData);
    })

    test('Should remove subtask', () => {
      const tasks = [
        {
          id: 1,
          title: 'Task 1',
          subtasks: [
            { id: 1, title: 'Subtask 1.1', completed: true },
            { id: 2, title: 'Subtask 1.2', completed: false },
            { id: 3, title: 'Subtask 1.3', completed: false },
          ],
        },
        {
          id: 2,
          title: 'Task 2',
          subtasks: [
            { id: 4, title: 'Subtask 2.1', completed: false },
            { id: 5, title: 'Subtask 2.2', completed: false },
          ],
        },
        {
          id: 3,
          title: 'Task 3',
          subtasks: [
            { id: 6, title: 'Subtask 3.1', completed: true },
            { id: 7, title: 'Subtask 3.2', completed: true },
            { id: 8, title: 'Subtask 3.3', completed: false },
          ],
        },
      ];
      const expectedReturnData = [
        {
          id: 1,
          title: 'Task 1',
          subtasks: [
            { id: 1, title: 'Subtask 1.1', completed: true },
            { id: 2, title: 'Subtask 1.2', completed: false },
            { id: 3, title: 'Subtask 1.3', completed: false },
          ],
        },
        {
          id: 2,
          title: 'Task 2',
          subtasks: [
            { id: 4, title: 'Subtask 2.1', completed: false },
            { id: 5, title: 'Subtask 2.2', completed: false },
          ],
        },
        {
          id: 3,
          title: 'Task 3',
          subtasks: [
            { id: 7, title: 'Subtask 3.2', completed: true },
            { id: 8, title: 'Subtask 3.3', completed: false },
          ],
        },
      ];
      const spy = jest.spyOn(localstorageService, 'loadAllData');
      spy.mockReturnValue(tasks);
      expect(taskService.removeSubtask(3,6)).toEqual(expectedReturnData);
      spy.mockRestore();
    })
  })
  