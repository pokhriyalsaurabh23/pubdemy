import { render, screen } from '@testing-library/react';
import { CourseModel } from '../../models/course.model';
import Course from './course.component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: jest.fn().mockImplementation(({ to, children }) => (
    <a href={to}>{children}</a>
  )),
}));

describe('Course component', () => {
  const coursedetails: CourseModel = {
    id: 1,
    imageUrl: 'path/to/image',
    title: 'Course Title',
    trainerName: 'Trainer Name',
    rating: 4,
    likes: 10,
    discountedPrice: 199,
    price: 299,
    avatarUrl: 'path/to/avatar',
    description: 'Course Description',
    studentsEnrolled: 100,
  };

  it('renders course details correctly', () => {
    render(<Course coursedetails={coursedetails} />);

    const titleElement = screen.getByText('Course Title');
    const trainerNameElement = screen.getByText('Trainer Name');

    expect(titleElement).toBeInTheDocument();
    expect(trainerNameElement).toBeInTheDocument();
  });
});
