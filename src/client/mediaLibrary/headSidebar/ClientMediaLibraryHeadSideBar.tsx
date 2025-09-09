import {Stack} from '@mui/material';
import React from 'react';
import sx from './sx'
import {ClientMediaLibraryPrevFolder} from "@client/mediaLibrary/view/button/prevFolder/ClientMediaLibraryPrevFolder";
import {
	ClientMediaLibraryForwardFolder
} from "@client/mediaLibrary/view/button/forwardFolder/ClientMediaLibraryForwardFolder";


export const ClientMediaLibraryHeadSideBar = () => {


    return (
      <>
          <Stack
              alignItems={'center'}
              justifyContent={'flex-start'}
              direction={'row'}
              gap={2}
              sx={sx.root}
          >
              <Stack
                  direction={'row'}
                  gap={'3px'}
              >
                  <ClientMediaLibraryPrevFolder/>
                  
                  <ClientMediaLibraryForwardFolder/>
              </Stack>
          </Stack>
      </>
    );
};
