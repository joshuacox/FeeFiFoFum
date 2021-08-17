[global]
bs=4K
iodepth=1
direct=1
ioengine=libaio
group_reporting
time_based
runtime=5
numjobs=1
name=rwlatency-test-job
rw=randrw
							
[job1]
filename=$REPLACEME_filename_REPLACEME
