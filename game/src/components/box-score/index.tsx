import React from "react";
import { Card } from "@mui/material";
import { formatNumber } from "@letsdosquares/core";

export type BoxScoreProps = {
  loading?: boolean;
};

/**
 *
 * @param {BoxScoreProps} props
 * @returns {JSX.Element}
 */
const BoxScore: React.FC<BoxScoreProps> = (
  props: BoxScoreProps
): JSX.Element => (
  <Card>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell />
          {Array.from(Array(4)).map((_, idx) => (
            <TableCell key={idx} align="center">
              formatNumber(idx + 1, 'Oo')
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>CAR</TableCell>
          <TableCell>
            <code>7</code>
          </TableCell>
          <TableCell>
            <code>10</code>
          </TableCell>
          <TableCell>
            <code>10</code>
          </TableCell>
          <TableCell>
            <code>13</code>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>CHI</TableCell>
          <TableCell>
            <code>3</code>
          </TableCell>
          <TableCell>
            <code>9</code>
          </TableCell>
          <TableCell>
            <code>16</code>
          </TableCell>
          <TableCell>
            <code>16</code>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);

export default BoxScore;
