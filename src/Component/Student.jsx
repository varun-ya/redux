import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addStudent, editStudent, deleteStudent } from "../Features/studentSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Box,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Student = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.Students.students);

  const [studentData, setStudentData] = useState({
    name: "",
    course: "",
    age: "",
    Batch: "",
  });

  const [editingStudent, setEditingStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (studentData.name && studentData.course && studentData.age && studentData.Batch) {
      if (editingStudent) {
        dispatch(editStudent({ ...studentData, id: editingStudent.id }));
        setEditingStudent(null);
      } else {
        dispatch(addStudent(studentData));
      }
      setStudentData({ name: "", course: "", age: "", Batch: "" });
      setShowForm(false);
    }
  };

  const handleEdit = (student) => {
    setStudentData(student);
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleClose = () => {
    setShowForm(false);
    setEditingStudent(null);
    setStudentData({ name: "", course: "", age: "", Batch: "" });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box display="flex" justifyContent="center" mb={3}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => setShowForm(true)}
        >
          Add Student
        </Button>
      </Box>

      {/* Dialog Form */}
      <Dialog fullScreen open={showForm} onClose={handleClose}>
        <AppBar position="sticky" sx={{ bgcolor: "#1976d2" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ flex: 1, textAlign: "center" }} variant="h6">
              {editingStudent ? "Edit Student" : "Add Student"}
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <Box p={4} mt={4} borderRadius={2} boxShadow={3} bgcolor="white">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField label="Name" name="name" value={studentData.name} onChange={handleChange} fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Course" name="course" value={studentData.course} onChange={handleChange} fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="Age" type="number" name="age" value={studentData.age} onChange={handleChange} fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField name="Batch" type="month" value={studentData.Batch} onChange={handleChange} fullWidth />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                {editingStudent ? "Update Student" : "Add Student"}
              </Button>
            </form>
          </Box>
        </Container>
      </Dialog>

      {/* Student Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 3, borderRadius: 2 }}>
        <Table>
          <TableHead sx={{ bgcolor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Age</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Course</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="right">Batch</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length > 0 ? (
              students.map((student) => (
                <TableRow key={student.id} hover>
                  <TableCell>{student.name}</TableCell>
                  <TableCell align="right">{student.age}</TableCell>
                  <TableCell align="right">{student.course}</TableCell>
                  <TableCell align="right">{student.Batch}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="warning" startIcon={<EditIcon />} onClick={() => handleEdit(student)} sx={{ mr: 1 }}>
                      Edit
                    </Button>
                    <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete(student.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">No students available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Student;
