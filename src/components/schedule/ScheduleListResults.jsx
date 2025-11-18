/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Edit as EditIcon } from 'react-feather';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  SvgIcon
} from '@mui/material';
import PropTypes from 'prop-types';

const ScheduleListResults = (props) => {
  const { Schedules, search } = props || {};
  const [selectedScheduleRefs, setSelectedScheduleRefs] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [allchecked, setall] = useState(false);

  const handleSelectAll = (event) => {
    let newSelectedScheduleRefs;
    setall(event.target.checked);

    if (Schedules && Schedules.length > 0 && event.target.checked) {
      newSelectedScheduleRefs = Schedules.map(
        (schedule) => schedule.ScheduleRef
      );
    } else {
      newSelectedScheduleRefs = [];
    }
    props.setselected(newSelectedScheduleRefs);
    setSelectedScheduleRefs(newSelectedScheduleRefs);
  };

  const handleSelectOne = (event, ScheduleRef) => {
    const selectedIndex = selectedScheduleRefs.indexOf(ScheduleRef);
    let newSelectedScheduleRefs = [];

    if (selectedIndex === -1) {
      newSelectedScheduleRefs = newSelectedScheduleRefs.concat(
        selectedScheduleRefs,
        ScheduleRef
      );
    } else if (selectedIndex === 0) {
      newSelectedScheduleRefs = newSelectedScheduleRefs.concat(
        selectedScheduleRefs.slice(1)
      );
    } else if (selectedIndex === selectedScheduleRefs.length - 1) {
      newSelectedScheduleRefs = newSelectedScheduleRefs.concat(
        selectedScheduleRefs.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedScheduleRefs = newSelectedScheduleRefs.concat(
        selectedScheduleRefs.slice(0, selectedIndex),
        selectedScheduleRefs.slice(selectedIndex + 1)
      );
    }
    props.setselected(newSelectedScheduleRefs);
    setSelectedScheduleRefs(newSelectedScheduleRefs);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card sx={{ boxShadow: 2 }}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            {/* ✅ IMPROVED TABLE HEAD */}
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderBottom: '2px solid #ddd'
                }}
              >
                {/* ✅ Checkbox column - centered */}
                <TableCell
                  padding="checkbox"
                  align="center"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    width: '5%'
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Checkbox
                      checked={allchecked}
                      color="primary"
                      indeterminate={
                        selectedScheduleRefs.length > 0 &&
                        selectedScheduleRefs.length < Schedules?.length &&
                        Schedules?.length > 0
                      }
                      onChange={handleSelectAll}
                    />
                  </Box>
                </TableCell>

                {/* ✅ BOLD COLUMN HEADERS - LEFT ALIGNED */}
                <TableCell
                  align="left"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    padding: '16px',
                    width: '15%'
                  }}
                >
                  Schedule Title
                </TableCell>

                <TableCell
                  align="left"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    padding: '16px',
                    width: '15%'
                  }}
                >
                  Description
                </TableCell>

                <TableCell
                  align="left"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    padding: '16px',
                    width: '15%'
                  }}
                >
                  Assigned Playlist
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    padding: '16px',
                    width: '12%'
                  }}
                >
                  Status
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    padding: '16px',
                    width: '18%'
                  }}
                >
                  Creation Date
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: '#333',
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    padding: '16px',
                    width: '10%'
                  }}
                >
                  Edit
                </TableCell>
              </TableRow>
            </TableHead>

            {/* ✅ IMPROVED TABLE BODY */}
            <TableBody>
              {Schedules &&
                Schedules.filter((item) =>
                  item.Title.toLowerCase().includes(search.toLowerCase())
                )
                  .slice(page * limit, page * limit + limit)
                  .map((schedule) => (
                    <TableRow
                      hover
                      key={schedule.ScheduleRef}
                      selected={
                        selectedScheduleRefs.indexOf(schedule.ScheduleRef) !== -1
                      }
                      sx={{
                        '&:hover': {
                          backgroundColor: '#f9f9f9'
                        },
                        borderBottom: '1px solid #eee',
                        height: 64
                      }}
                    >
                      {/* ✅ Checkbox cell - centered */}
                      <TableCell
                        padding="checkbox"
                        align="center"
                        sx={{ padding: '12px 16px', width: '5%' }}
                      >
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                        >
                          <Checkbox
                            checked={
                              selectedScheduleRefs.indexOf(schedule.ScheduleRef) !==
                              -1
                            }
                            onChange={(event) =>
                              handleSelectOne(event, schedule.ScheduleRef)
                            }
                            value="true"
                          />
                        </Box>
                      </TableCell>

                      {/* ✅ Schedule Title - left aligned */}
                      <TableCell
                        align="left"
                        onClick={() => props.view(schedule)}
                        sx={{
                          padding: '16px',
                          cursor: 'pointer',
                          fontWeight: 500,
                          color: '#1976d2',
                          width: '15%',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        <Typography color="textPrimary" variant="body2">
                          {schedule.Title}
                        </Typography>
                      </TableCell>

                      {/* ✅ Description - left aligned */}
                      <TableCell
                        align="left"
                        onClick={() => props.view(schedule)}
                        sx={{
                          padding: '16px',
                          cursor: 'pointer',
                          color: '#666',
                          fontSize: '0.9rem',
                          width: '15%',
                          '&:hover': {
                            backgroundColor: '#fafafa'
                          }
                        }}
                      >
                        {schedule.Description === 'null' || !schedule.Description
                          ? '--'
                          : schedule.Description}
                      </TableCell>

                      {/* ✅ Assigned Playlist - left aligned */}
                      <TableCell
                        align="left"
                        onClick={() => props.view(schedule)}
                        sx={{
                          padding: '16px',
                          cursor: 'pointer',
                          color: '#666',
                          fontSize: '0.9rem',
                          width: '15%',
                          '&:hover': {
                            backgroundColor: '#fafafa'
                          }
                        }}
                      >
                        {schedule.PlaylistName}
                      </TableCell>

                      {/* ✅ Status - centered with badge */}
                      <TableCell
                        align="center"
                        onClick={() => props.view(schedule)}
                        sx={{
                          padding: '16px',
                          cursor: 'pointer',
                          width: '12%'
                        }}
                      >
                        <Box
                          sx={{
                            display: 'inline-block',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            backgroundColor: schedule.IsActive
                              ? '#e8f5e9'
                              : '#ffebee',
                            color: schedule.IsActive ? '#2e7d32' : '#c62828'
                          }}
                        >
                          {schedule.IsActive ? 'Active' : 'Inactive'}
                        </Box>
                      </TableCell>

                      {/* ✅ Creation Date - centered */}
                      <TableCell
                        align="center"
                        sx={{
                          padding: '16px',
                          color: '#999',
                          fontSize: '0.9rem',
                          width: '18%'
                        }}
                      >
                        {schedule.CreatedOn}
                      </TableCell>

                      {/* ✅ Edit - centered */}
                      <TableCell
                        align="center"
                        sx={{ padding: '16px', width: '10%' }}
                      >
                        <Button
                          sx={{
                            minWidth: 40,
                            padding: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '0 auto',
                            '&:hover': {
                              backgroundColor: '#e3f2fd'
                            }
                          }}
                          onClick={() => props.editcall(schedule)}
                        >
                          <SvgIcon fontSize="small" color="primary">
                            <EditIcon />
                          </SvgIcon>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

      {/* ✅ IMPROVED PAGINATION */}
      <TablePagination
        component="div"
        count={Schedules && Schedules.length > 0 ? Schedules.length : 0}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{
          borderTop: '2px solid #eee',
          backgroundColor: '#f9f9f9'
        }}
      />
    </Card>
  );
};

ScheduleListResults.propTypes = {
  Schedules: PropTypes.array
};

export default ScheduleListResults;
