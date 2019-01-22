function setupStorage {
    echo "setupStorage"
    mkdir -p /mnt/local-storage 2>/dev/null
#    for dir in "pgsql-data"; do
#        mkdir -p /mnt/local-storage/$dir
#        btrfs subvolume create "/$dir" 2>/dev/null
#        ID=`btrfs subvolume list / | grep $dir | awk '{print $2}'`
#        DEVICE=`mount | grep root | head -n 1 | awk '{print $1}'`
#        MOUNTED=`mount | grep -c $dir`
#        [[ $MOUNTED -gt 0 ]] || mount $DEVICE /mnt/local-storage/$dir -o subvolid=$ID 2>/dev/null
#    done
    chmod a+w /mnt/local-storage
    chmod a+r /mnt/local-storage
    chcon -R unconfined_u:object_r:svirt_sandbox_file_t:s0 /mnt/local-storage/
    for f in $(find ../extras/rdbms/volumes -name "*volume*.y*ml"); do
        echo "Applying $f"
        oc apply -f $f
    done
}


